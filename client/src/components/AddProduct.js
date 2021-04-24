import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Box,
  Grid,
  Paper,
  TextField,
  Container,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import { addProducts, updateProduct } from "../actions/productAction";
import Notification from "../common/Notification";
import isEmpty from "../common/isEmpty";
const useStyles = (theme) => ({
  root: {
    backgroundColor: "#FFF",
    color: "BLACK",
    label: "white",
  },
  text: {
    color: "white",
    backgroundColor: "#282828",
  },
});

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      price: "",
      companyName: "",
      quantity: "",
      _id: "",
      notify: {
        isOpen: false,
        message: "",
        type: "",
        timing: "",
      },
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.location.row) {
      this.setState({ ...this.props.location.row });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, errors: {} });
  };

  onSubmit = async () => {
    let data = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      companyName: this.state.companyName,
      quantity: this.state.quantity,
    };
    if (this.validateForm({ submitted: true })) {
      if (this.state._id) {
        data.id = this.state._id;
        let result = await this.props.updateProduct(data, this.props.history);
        if (this.props.errors && this.props.errors.message) {
          this.setState({
            notify: {
              isOpen: true,
              message: this.props.errors.message,
              type: "error",
              timing: 2000,
            },
          });
        } else {
          this.setState({
            notify: {
              isOpen: true,
              message: "Product updated successfully",
              type: "success",
              timing: 2000,
            },
          });
        }
      } else {
        let result = await this.props.addProducts(data, this.props.history);
        if (this.props.errors && this.props.errors.message) {
          this.setState({
            notify: {
              isOpen: true,
              message: this.props.errors.message,
              type: "error",
              timing: 2000,
            },
          });
        } else {
          this.setState({
            notify: {
              isOpen: true,
              message: "Product added successfully",
              type: "success",
              timing: 2000,
            },
          });
        }
      }
    }
  };

  validateForm = ({ key, submitted = false }) => {
    const errors = {};

    const { name, description, price, companyName, quantity } = this.state;

    if (isEmpty(name) && (name || submitted)) {
      errors.name = "Name field is required";
    }
    if (isEmpty(description) && (description || submitted)) {
      errors.description = "Name field is required";
    }
    if (isEmpty(price) && (price || submitted)) {
      errors.price = "Name field is required";
    }
    if (isEmpty(companyName) && (companyName || submitted)) {
      errors.companyName = "Name field is required";
    }
    if (isEmpty(quantity) && (quantity || submitted)) {
      errors.quantity = "Name field is required";
    }

    delete errors.errors;
    this.setState({ errors }, () => {
      console.log({ errors });
    });

    return isEmpty(errors);
  };

  closeNotification = () => {
    console.log("i am awkakkkk");
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
    const { classes } = this.props;
    const { errors } = this.state;

    return (
      <Container maxWidth="sm">
        <Box display="flex" justifyContent="center">
          <form>
            <Paper elevation={5} className={classes.root}>
              <Box p={2} m={4}>
                <h1>Add Products</h1>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      className={classes.root}
                      name="name"
                      fullWidth
                      label="Product Name"
                      value={this.state.name}
                      onChange={this.onChange}
                      variant="outlined"
                    />
                    {errors && errors.name && (
                      <p className="text-danger" style={{ color: "red" }}>
                        {errors.name}
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="companyName"
                      fullWidth
                      label="companyName"
                      value={this.state.companyName}
                      onChange={this.onChange}
                      variant="outlined"
                    />
                    {errors && errors.companyName && (
                      <p className="text-danger" style={{ color: "red" }}>
                        {errors.companyName}
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="description"
                      fullWidth
                      label="Description"
                      value={this.state.description}
                      onChange={this.onChange}
                      variant="outlined"
                    />
                    {errors && errors.description && (
                      <p className="text-danger" style={{ color: "red" }}>
                        {errors.description}
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="price"
                      fullWidth
                      label="Price"
                      value={this.state.price}
                      onChange={this.onChange}
                      variant="outlined"
                    />
                    {errors && errors.price && (
                      <p className="text-danger" style={{ color: "red" }}>
                        {errors.price}
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="quantity"
                      fullWidth
                      label="Quantity"
                      value={this.state.quantity}
                      onChange={this.onChange}
                      variant="outlined"
                    />
                    {errors && errors.quantity && (
                      <p className="text-danger" style={{ color: "red" }}>
                        {errors.quantity}
                      </p>
                    )}
                  </Grid>
                </Grid>
                <Grid container justify="flex-end" spacing={2}>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={this.onSubmit}
                      color="primary"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </form>
        </Box>
        <Notification
          notify={this.state.notify}
          closeNotification={this.closeNotification}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default withStyles(useStyles)(
  connect(mapStateToProps, { addProducts, updateProduct })(
    withRouter(AddProduct)
  )
);
