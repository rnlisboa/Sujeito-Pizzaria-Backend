import prismaClient from "../../prisma";

interface ProductRequest {
    category_id: string
}
class ListByCategoryService{
    async execute({ category_id}: ProductRequest){
        const findByRequest = await prismaClient.product.findMany({
            where:{
                category_id
            } 
        })


        return findByRequest;
    }
}

export { ListByCategoryService }