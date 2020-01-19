<template>
    <div id="landslide-alert-station-layer" class="landslide-alert-station-layer">
        <l-layer-group :layer-type="stationAlertType" :name="stationAlertName" :visible="stationAlertVisible">
            <landslide-alert-marker
                    v-for="landslideStation in landslideStations"
                    :key="landslideStation.id"
                    :stationAlert="landslideStation"
                    :specificAlert="specificAlert"
            >
            </landslide-alert-marker>
        </l-layer-group>

        <l-layer-group  :layer-type="polygonAlertType" :name="polygonAlertName" :visible="polygonAlertVisible">
                <!-- TODO: se renderiza el kml para esta zona especifica. (Traer informacion se zona)-->
        </l-layer-group>
    </div>
</template>

<script>
    import LandslideStation from "../../../store/models/alerts/landslide/landslideStation";
    import { LLayerGroup } from "vue2-leaflet"
    import LandslideAlert from "../../../store/models/alerts/landslide/landslideAlert";
    import LandslideAlertMarker from "./LandslideAlertMarker";

    export default {
        name: "landslide-alert-station-layer",
        props: { specificAlert : LandslideAlert },
        components: {LandslideAlertMarker,LLayerGroup},
        data(){
            return {
                stationAlertName: 'marker_', //+ this.stationAlertName.name,
                stationAlertVisible: true,
                stationAlertType: 'overlay',

                polygonAlertName : 'kml_', // + this.specificAlert.name,
                polygonAlertVisible: true,
                polygonAlertType: 'overlay'
            }
        },
        computed: {
            landslideStations(){
                return LandslideStation.query().where('primary',true).where('alert_id', this.specificAlert.id).get()
            }
        }
    }
</script>

<style scoped>

</style>