import { Request, Response } from 'express';
import { FinalizarPedidoService } from '../../services/order/ConcludeOrderService';

class FinalizarPedidoController {
  async handle(req: Request, res: Response) {
    const { pedido_id } = req.params;

    const finalizarPedido = new FinalizarPedidoService();

    const total = await finalizarPedido.execute(pedido_id);

    return res.json({ 
      total
    }); 
  }
}

export default FinalizarPedidoController;
