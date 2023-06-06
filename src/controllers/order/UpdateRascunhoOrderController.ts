import { Request, Response } from 'express';
import { UpdatePedidoService } from '../../services/order/UpdateRascunhoOrderService';

class UpdatePedidoController {
  async handle(req: Request, res: Response) {
    const { pedido_id } = req.body;

    const updatePedido = new UpdatePedidoService();

    const pedido = await updatePedido.execute(pedido_id);

    return res.json({ 
      message: 'Status do pedido alterado com sucesso!',
      pedido: pedido
    }); 
  }
}

export default UpdatePedidoController;
