<template>
  <div class="wrapper d-flex align-items-stretch">

  <nav id="sidebar" class="active">
  <h1><router-link to="/" class="logo">P</router-link></h1>

  <ul class="list-unstyled components mb-5">
  <li><router-link to="/"><span class="fa fa-home"></span> Home</router-link></li>
  <li><router-link to="notification"><span class="fa fa-exclamation-circle"></span> Notification</router-link></li>
  </ul>


  <div class="footer">
  <p>&copy; <span id="data-date"></span> - All rights reserved</p>
  </div>
 </nav>

  <div id="content" class="p-4">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <button type="button" class="btn btn-primary btn-lg pull-left"><i class="fa fa-th"></i> <span>Dashboard</span></button>
  </div>
  </nav>


  </div>
  </template>
  export default {
    created() {},
    mounted() {
      document.getElementById("data-date").innerHTML = new Date().getFullYear();
    }
  };
  </script>
