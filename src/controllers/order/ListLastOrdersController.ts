import { Request, Response } from 'express';
import { ListUltimosPedidosService } from '../../services/order/ListLastOrdersService';

class ListUltimosPedidosController {
  async handle(req: Request, res: Response) {
    const listUltimosPedidos = new ListUltimosPedidosService();

    const pedidos = await listUltimosPedidos.execute();

    return res.json({ 
      pedidos
    }); 
  }
}

export default ListUltimosPedidosController;
