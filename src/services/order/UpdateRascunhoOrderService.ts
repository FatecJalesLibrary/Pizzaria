import prismaClient from "../../prisma";

class UpdatePedidoService {
  async execute(pedido_id: string) {
    const pedido = await prismaClient.pedido.update({
      where: {
        id: pedido_id,
      },
      data: {
        rascunho: false,
      },
    });
    return pedido;
  }
}

export { UpdatePedidoService };
