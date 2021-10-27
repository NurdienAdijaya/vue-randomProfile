const app = Vue.createApp({
  data() {
    return {
      firstName: "Nurdien",
      lastName: "Adijaya",
      email: "nurdienadijaya@gmail.com",
      gender: "male",
      city: "Bekasi",
      country: "Indonesia",
      picture:
        "https://media-exp1.licdn.com/dms/image/C5603AQEzlW2J-0eGyg/profile-displayphoto-shrink_800_800/0/1631613435882?e=1640822400&v=beta&t=LB4yYfWIw7SUIZxV51AH8wjT0509GxPar7f9Z9Y50v0",
    };
  },
  methods: {
    async getProfile() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      console.log(results);

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.city = results[0].location.city;
      this.country = results[0].location.country;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#app");
