import prismaClient from "../../prisma";

interface RequestItem {
    item_id: string
}

class RemoveItemService {
    async execute({ item_id }: RequestItem){
        
        const order = await prismaClient.item.delete({
            where:{
                id: item_id
            }
        })

        return order
    }
}

export { RemoveItemService }