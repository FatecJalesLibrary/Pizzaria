import prismaClient from "../../prisma";

class FinalizarPedidoService {
  async execute(pedido_id: string) {
    const itens = await prismaClient.item.findMany({
      where: {
        id_pedido: pedido_id,
      },
      select: {
        quantidade: true,
        produto: {
          select: {
            preco: true,
          },
        },
      },
    });

    let total = 0;

    itens.forEach(item => {
      const quantidade = item.quantidade;
      const preco = parseFloat(item.produto?.preco) || 0;
      console.log("item", item)
      console.log("quantidade", quantidade)
      console.log("preco", preco)
    
      if (typeof quantidade === 'number' && typeof preco === 'number') {
        total += quantidade * preco;
      }
    });
    

    return total;
  }
}

export { FinalizarPedidoService };
