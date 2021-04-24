import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getAllProducts, deleteProduct } from "../actions/productAction";
import Table from "./Table";
import { Button, Box, Grid, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Notification from "../common/Notification";

const useStyles = (theme) => ({
  allignBox: {
    justifyContent: "flex-end",
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notify: {
        isOpen: false,
        message: "",
        type: "",
        timing: "",
      },
    };
  }

  componentDidMount() {
    this.props.getAllProducts();
    console.log("error", this.props.errors);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({
        notify: {
          isOpen: true,
          message: "Network Error",
          type: "error",
          timing: 2000,
        },
      });
    }
  }

  deleteSingleProduct = (id) => {
    this.props.deleteProduct(id);
    this.setState({
      notify: {
        isOpen: true,
        message: "Product Deleted Successfully",
        type: "success",
        timing: 2000,
      },
    });
  };

  closeNotification = () => {
    this.setState({
      notify: {
        isOpen: false,
        message: "",
        type: "",
        timing: "",
      },
    });
  };

  render() {
    const { products } = this.props.products;
    console.log("products", this.state);
    return (
      <Box p={4}>
        <Grid spacing={2}>
          <Grid container justify="flex-end">
            <Link to="/addproduct">
              <Button
                variant="contained"
                color="primary"
                onClick={this.onClick}
              >
                <AddIcon />
                Add Product
              </Button>
            </Link>
          </Grid>
          <Box m={1}>
            {products && products.length > 0 ? (
              <>
                <h1 style={{ color: "#3f51b5" }}>Inventory</h1>
                <Table
                  rows={products}
                  deleteSingleProduct={this.deleteSingleProduct}
                />
              </>
            ) : (
              <Box m={5}>
                <Paper elevation={0}>
                  <Typography variant="h3" component="h2">
                    You don't have any Inventory? Please click on Add Product to
                    create one!!!
                  </Typography>
                </Paper>
              </Box>
            )}
          </Box>
        </Grid>
        <Notification
          notify={this.state.notify}
          closeNotification={this.closeNotification}
        />
      </Box>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products,
  errors: state.errors,
});

export default withStyles(useStyles)(
  connect(mapStateToProps, { getAllProducts, deleteProduct })(
    withRouter(Dashboard)
  )
);
