var vue = new Vue({
	el: "#app",
	ready: function(){
		var _this = this;
		setInterval(function(){
			_this.counter += 1;
			_this.updateTime();
		}, 1000)
	},
	data:{
		counter: 0,
		selectedTimeZone: null,
		times: []
	},
	methods: {
		reverseMessage: function(){
			this.message = this.message.split("").reverse().join("");
		},
		getZoneTime: function(){
			var zoneTime = moment().tz(this.selectedTimeZone).format('h:mm:ss a');
			this.times.push({
				name: this.selectedTimeZone,
				time: zoneTime
			});
			console.log(zoneTime);
		},
		updateTime: function(){
			if(this.times.length > 0){
				for(var i=0; i< this.times.length; i++){
					this.times[i].time = moment().tz(this.times[i].name).format('h:mm:ss a');
				}
			}
		}
	},
	computed:{
		time: function(){
			this.counter;
			return moment().format('h:mm:ss a');		
		},
		timezones: function(){
			var timezones = [];
			var timezone = {};
			for (var i in moment.tz._zones) {
				timezone = moment.tz.unpack(moment.tz._zones[i]);
				timezones.push({
					name: timezone.name,
					offset: timezone.offsets[0]	
				});      		
    		}
    		return timezones;
		}
	}
});

