import Cart from "../Modules/Cart.schema.js";

// GET CART
export async function getCart(req, res) {
  try {
    const cart = await Cart.find();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// ADD TO CART
export async function addToCart(req, res) {
  const { courseId, title, price } = req.body;

  try {
    let item = await Cart.findOne({ courseId });

    if (item) {
      item.quantity += 1;
      await item.save();
    } else {
      item = await Cart.create({ courseId, title, price });
    }

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// DELETE FROM CART
export async function deleteFromCart(req, res) {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


export async function updateCartQuantity(req, res) {
  const { qty } = req.body;

  try {
    const item = await Cart.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    item.quantity += qty;

    // auto remove if quantity <= 0
    if (item.quantity <= 0) {
      await Cart.findByIdAndDelete(req.params.id);
      return res.json({ removed: true });
    }

    await item.save();
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
