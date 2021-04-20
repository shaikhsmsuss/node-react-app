import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getAllProducts } from "../actions/productAction";
import Table from "./Table";
import { Button, Box, Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

const useStyles = (theme) => ({
  allignBox: {
    justifyContent: "flex-end",
  },
});

class Dashboard extends Component {
  componentDidMount() {
    this.props.getAllProducts();
  }

  onClick = () => {};

  render() {
    const { products } = this.props.products;
    console.log("products", products);
    return (
      <Box p={4}>
        <Grid spacing={2}>
          <Grid container justify="flex-end">
            <Link to="addproduct">
              <Button
                variant="contained"
                color="primary"
                onClick={this.onClick}
              >
                <AddIcon /> Add Product
              </Button>
            </Link>
          </Grid>
          <Box m={1}>
            {products && products.length > 0 ? (
              <>
                <Table rows={products} />
              </>
            ) : (
              <>
                <Paper elevation={0}>
                  <h1>You don't have any Inventory? Please create one!!!</h1>
                </Paper>
              </>
            )}
          </Box>
        </Grid>
      </Box>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products,
});

export default withStyles(useStyles)(
  connect(mapStateToProps, { getAllProducts })(withRouter(Dashboard))
);
