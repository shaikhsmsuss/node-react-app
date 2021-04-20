import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Box, Grid, Paper, TextField } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import { addProducts, updateProduct } from "../actions/productAction";

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
      _id: "",
    };
  }

  componentDidMount() {
    if (this.props.location.row) {
      this.setState({ ...this.props.location.row });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    let data = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
    };

    if (this.state._id) {
      data.id = this.state._id;
      this.props.updateProduct(data, this.props.history);
    } else {
      this.props.addProducts(data, this.props.history);
    }

    console.log("data", data);
  };

  render() {
    const { classes } = this.props;
    console.log("state", this.state);

    return (
      <Box display="flex" justifyContent="center" m={4} p={1}>
        <form>
          <Paper elevation={5} className={classes.root}>
            <Box p={10}>
              <h1>Add Products</h1>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    className={classes.root}
                    name="name"
                    fullWidth
                    label="Name"
                    value={this.state.name}
                    onChange={this.onChange}
                    variant="outlined"
                  />
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
    );
  }
}

export default withStyles(useStyles)(
  connect(null, { addProducts, updateProduct })(withRouter(AddProduct))
);
