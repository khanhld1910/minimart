<template>
  <div class="right_col" role="main" id="my-container">
    <div class>
      <div class="page-title">
        <div class="title_left">
          <h3>Plain Page</h3>
        </div>

        <div class="title_right">
          <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for...">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="clearfix"></div>

      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="x_panel">
            <div class="x_title">
              <h2>Plain Page</h2>
              <ul class="nav navbar-right panel_toolbox">
                <li>
                  <a class="collapse-link">
                    <i class="fa fa-chevron-up"></i>
                  </a>
                </li>
                <li class="dropdown">
                  <a
                    href="#"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    <i class="fa fa-wrench"></i>
                  </a>
                  <ul class="dropdown-menu" role="menu">
                    <li>
                      <a href="#">Settings 1</a>
                    </li>
                    <li>
                      <a href="#">Settings 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="close-link">
                    <i class="fa fa-close"></i>
                  </a>
                </li>
              </ul>
              <div class="clearfix"></div>
            </div>
            <div class="x_content">Add content to the page ...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "container",
  methods: {},
  data() {
    return {
      test: []
    };
  },
  mounted() {
  }
};
</script>

<style lang="scss">
  #my-container {
    height: calc(100vh - 58px - 49px - 20px);
    overflow-y: scroll;
    padding: 10px 17px 10px 20px;
    box-sizing: content-box; 
  }
</style>
