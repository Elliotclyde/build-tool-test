module.exports = {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist' },
      },
    packageOptions: {
      "source": "remote",
    },
    buildOptions:{
        out:"public"
    }
  };