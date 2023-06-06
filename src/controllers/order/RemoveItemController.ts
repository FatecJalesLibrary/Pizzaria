import { Request, Response } from 'express';
import { DeleteItemService } from '../../services/order/RemoveItemService';

class DeleteItemController {
  async handle(req: Request, res: Response) {
    const { item_id } = req.body

    const deleteItem = new DeleteItemService();

    const item = await deleteItem.execute(item_id);

    return res.json({
      message: 'Item removido com sucesso!',
      item: item
    }); 
  }
}

export default DeleteItemController;
