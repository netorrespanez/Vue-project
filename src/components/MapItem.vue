<template>
  <div class="list-wrapper">
    <div class="google-map" ref="googleMap"></div>
    <div class="map-info">
      <p>Base on data from</p>
      <img src="../assets/icons/logo_cff@2x.png" alt="" />
    </div>
    <CardItem
      v-for="card in cards"
      :key="card.recordid"
      :card="card"
      @selected="getInfo"
    />
  </div>
</template>

<script>
import CardItem from "./CardItem.vue";
import WindowItem from "./WindowItem.vue";
import VueResource from "vue-resource";
import GoogleMapsApiLoader from "google-maps-api-loader";
import MarkerClusterer from "@google/markerclusterer";
import { mapGetters } from "vuex";
import Vue from "vue";

Vue.use(VueResource);

export default {
  name: "MapItem",
  components: {
    CardItem
  },
  data() {
    return {
      options: {
        zoom: 7,
        center: { lat: 46.2, lng: 6.1667 }
      },
      apiKey: `AIzaSyDw_DEMNGJVRHIKYsJkP9ZRBjevr40SpEY`,
      google: null,
      map: null,
      markers: [],
      cards: []
    };
  },
  computed: {
    ...mapGetters(["getGeopos"])
  },
  created() {
    this.$http
      .get(
        "https://data.sbb.ch/api/records/1.0/search/?dataset=kontaktadressen&facet=service&rows=10&start=0"
      )
      .then(function(data) {
        this.getStations(data);
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  },
  async mounted() {
    //this.$store.dispatch("fetchStations");
    const googleMapItem = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    });

    this.google = googleMapItem;
    this.initMap();
  },
  methods: {
    /**
     * Develops the Object to render information about markers
     */
    getStations(data) {
      let newMarkers = data.data.records.map(elem => {
        return {
          recordid: elem.recordid,
          name: elem.fields.stationsbezeichnung,
          position: { lat: elem.fields.geopos[0], lng: elem.fields.geopos[1] },
          address: `${elem.fields.adresse}, ${elem.fields.plz} ${elem.fields.ort}`,
          email: elem.fields.mail,
          services: elem.fields.service
        };
      });

      this.cards = newMarkers;

      newMarkers.map(marker => {
        let location = { lat: marker.position.lat, lng: marker.position.lng };
        const markerElement = new this.google.maps.Marker({
          position: location,
          map: this.map
        });
        this.markers.push(markerElement);

        markerElement.addListener(`click`, () =>
          this.markerClickHandler(markerElement, marker)
        );
      });
      let imageCluster =
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m";
      new MarkerClusterer(this.map, this.markers, {
        imagePath: imageCluster
      });
    },
    /**
     * Set the map properties to load
     */
    initMap() {
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer, this.options);
    },
    /**
     * Link each marker to its pop-up
     */
    markerClickHandler(item, marker) {
      const infoWindow = Vue.extend(WindowItem);
      const instance = new infoWindow({
        propsData: {
          content: {
            name: marker.name,
            address: marker.address,
            email: marker.email
          }
        }
      });
      instance.$mount();

      let new_infowindow = new this.google.maps.InfoWindow({
        content: instance.$el
      });
      new_infowindow.open(this.map, item);
    },
    getInfo(recordid) {
      return recordid;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/colorVariables.scss";
@import "../assets/scss/fontsVariables.scss";
.google-map {
  position: relative;
  min-height: 440px;
  //width: 900px;
  //margin: 51.06px 50px 51.06px 50px;
}

.list-wrapper {
  position: relative;
  height: 100%;
  padding: 50px;

  background-color: #ffffff;
  border: 1px solid red;
  //width: 1000px;
  //padding: 51.06px 50px 51.06 50px;
}

.map-info {
  position: relative;
  display: flex;
  justify-content: flex-end;
  p {
    position: relative;
    margin: 0 13px;
    padding: 20px 0px;

    font-size: 14px;
    font-family: $font-card-info;
  }
  img {
    height: 13px;
    padding: 20px 0px;
  }
}
</style>
