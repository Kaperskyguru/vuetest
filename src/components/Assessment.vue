<template>

<div class="container-fluid">
  <div class="row">
    <div class="col-md-6 col-sm-6 col-xs-12" id="userTable" style="display:non">
      <div class="caption"> Application Pending Assessment</div>
    <div class="table-responsive">
      <table class="table table-striped table-bordered">
        <thead class="indigo text-white">
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in userDatas" :key="data.id">
            <td>{{data.id}}</td>
            <td>{{data.name}}</td>
            <td>{{data.phone}}</td>
            <td><button class="btn btn-info btn-xs" v-on:click = "processData">Process</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>


    <div class="col-md-6 col-sm-6 col-xs-12" v-if="processData">
    <div class="table-caption"> Application Processed</div>
    <div class="table-responsive">
    <table class="table table-striped table-bordered">
    <thead class="indigo text-white">
      <tr>
        <th>SN</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Johnson Johnson</td>
        <td>0123456789</td>
        <td><a href="#" class="btn btn-info"> Processed </a> <a href="#" class="btn btn-primary"> View </a></td>
      </tr>
      <tr>
    </tbody>
    </table>
    </div>
    </div>

</div>


</div>

</template>
