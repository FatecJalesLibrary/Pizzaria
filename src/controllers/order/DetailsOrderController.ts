import { Request, Response } from 'express';
import { DetalhesPedidoService } from '../../services/order/DetailsOrderService';

class DetalhesPedidoController {
  async handle(req: Request, res: Response) {
    const { pedido_id } = req.body;

    const detalhesPedido = new DetalhesPedidoService();

    const itens = await detalhesPedido.execute(pedido_id);

    return res.json({ 
      itens
    }); 
  }
}

export default DetalhesPedidoController;
