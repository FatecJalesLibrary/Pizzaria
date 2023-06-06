import prismaClient from "../../prisma";

class DetalhesPedidoService {
  async execute(pedido_id: string) {
    const itens = await prismaClient.item.findMany({
      where: {
        id_pedido: pedido_id,
      },
    });

    return itens;
  }
}

export { DetalhesPedidoService };
