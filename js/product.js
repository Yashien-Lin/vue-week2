const app = {
  data() {
    return {
      apiUrl: "https://vue3-course-api.hexschool.io/v2",
      apiPath: "yashienxzxz",
      temp: {},
      products: [],
    };
  },
  methods: {
    checkLogin() {
      axios
        .post(`${this.apiUrl}/api/user/check`)
        .then((res) => {
          this.getData();
        })
        .catch((err) => {
          alert(err.data.message);
          console.log(err);
          window.location = "index.html";
        });
    },
    getData() {
      axios
        .get(`${this.apiUrl}/api/${this.apiPath}/admin/products`)
        .then((res) => {
          // console.log(res.data);
          this.products = res.data.products;
        })
        .catch((err) => console.log(err));
    },
    openProduct(item) {
      this.temp = item;
      // console.log(this.temp);
    },
  },
  mounted() {
    //取出token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    //存進header
    axios.defaults.headers.common.Authorization = token;
    this.checkLogin();
  },
};

Vue.createApp(app).mount("#app");
