<template>

<div class="container-fluid">
  <div class="row">
<div class="col-md-6 col-sm-6 col-xs-12" id="root">
<div class="panel panel-primary diff">
<div class="panel-heading" style="font-size:17px">Planning Fee Assessment</div>
<div class="panel-body">
  <div class="form-group">
      <label for="apptype">Application Type {{gtotal}} </label>
      <input type="text" name="apptype" v-model="newUser.apptype" class="form-control" placeholder="Application Type" value="500" required>
    </div>
    <div class="form-group">
      <label for="building">Building Category</label>
      <input type="text" name="building" v-model="newUser.building" class="form-control" placeholder="Building Category" value="200" required>
    </div>
    <div class="form-group">
      <label for="dev">Development Type</label>
      <input type="text" name="dev" v-model="dev" class="form-control" placeholder="Development Type" required value="300">
    </div>
    <div class="form-group">
      <label for="appfee">Application Fee</label>
      <input type="text" name="appfee" v-model="appfee" class="form-control" placeholder="Application Fee" value="100" required>
    </div>
    <div class="form-group">
      <label for="filefee">File Fee</label>
      <input type="text" name="filefee" v-model="filefee" class="form-control" placeholder="File Fee" required value="104">
    </div>
    <div class="form-group">
      <label for="regfee">Registration Fee</label>
      <input type="text" name="regfee"  v-model="regfee" class="form-control" placeholder="Registration Fee" required value="200">
    </div>
    <div class="form-group row">
      <div class="col-md-5 pull-right">
        <label for="amount">Total Amount: </label>
        <input type="text" name="amount"  class="form-control" style="width:auto;" readonly>
      </div>
    </div>
    <div class="form-group">
      <a href="#" class="btn btn-warning btn-lg pull-right">CANEL</a>
      <button type="submit" name="process" class="btn btn-primary btn-lg pull-left">SUBMIT</button>
    </div>
</div>
</div>

</div>
</div>



</div>

</template>
