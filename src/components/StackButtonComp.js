import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ButtonComp from "../components/ButtonComp";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { addProduct } from "../redux/actions/ProductApiAction";
import { useSelector, useDispatch } from "react-redux";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const StackButtonComp = (props) => {
  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const state = useSelector((state) => state.addproduct);

  const dispatch = useDispatch();

  //   add product function start -------------------------------------------------
  const addProductAction = async (body) => {
    dispatch(addProduct(body));
  };
  const addProductFunction = async (e) => {
    e.preventDefault();
    const resp = await addProductAction({
      title,
      price,
      description,
      image,
      category,
    });
    console.log("state", state.addproduct, resp);
  };
  // add product function end ---------------------------------------------------------

  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button
          onClick={handleOpenAdd}
          size="small"
          variant="contained"
          color="success"
        >
          Add
        </Button>
        <Button onClick={handleOpenEdit} size="small" variant="contained">
          Edit
        </Button>
        <Button
          onClick={handleOpenDelete}
          size="small"
          variant="contained"
          color="error"
        >
          Delete
        </Button>
      </Stack>

      {/* //add modal start------------------------------------------ */}
      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Product
          </Typography>
          <form onSubmit={addProductFunction}>
            <TextField
              value={title}
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title "
              name="text"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              value={price}
              margin="normal"
              required
              fullWidth
              name="text"
              label="Price"
              type="text"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              value={description}
              margin="normal"
              required
              fullWidth
              id="description"
              label="description "
              name="description"
              autoFocus
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              value={image}
              margin="normal"
              required
              fullWidth
              id="image"
              label="image "
              name="text"
              autoFocus
              onChange={(e) => setImage(e.target.value)}
            />
            <TextField
              value={category}
              margin="normal"
              required
              fullWidth
              id="category"
              label="category "
              name="category"
              autoFocus
              onChange={(e) => setCategory(e.target.value)}
            />

            <ButtonComp
              type="submit"
              variant="contained"
              text="Add"
              color="success"
            />
          </form>
        </Box>
      </Modal>
      {/* //add modal end------------------------------------------ */}

      {/* //edit modal start------------------------------------------ */}
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a edit
          </Typography>
          <form>
            <TextField
              value={title}
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title "
              name="text"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              value={price}
              margin="normal"
              required
              fullWidth
              name="text"
              label="Price"
              type="text"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              value={description}
              margin="normal"
              required
              fullWidth
              id="description"
              label="description "
              name="description"
              autoFocus
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              value={image}
              margin="normal"
              required
              fullWidth
              id="image"
              label="image "
              name="text"
              autoFocus
              onChange={(e) => setImage(e.target.value)}
            />
            <TextField
              value={category}
              margin="normal"
              required
              fullWidth
              id="category"
              label="category "
              name="category"
              autoFocus
              onChange={(e) => setCategory(e.target.value)}
            />

            <ButtonComp type="submit" variant="contained" text="Update" />
          </form>
        </Box>
      </Modal>
      {/* //edit modal end------------------------------------------ */}

      {/* //edit modal start------------------------------------------ */}
      <Modal
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete
          </Typography>
          <ButtonComp
            type="submit"
            variant="contained"
            text="Delete"
            color="error"
          />
        </Box>
      </Modal>
      {/* //edit modal end------------------------------------------ */}
    </div>
  );
};

export default StackButtonComp;
