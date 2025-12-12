import dbConnect from "@/lib/dbConnect"
import PortfolioModel from "@/lib/schema/models/PortfolioModel"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"



export async function GET() {

    await dbConnect()
    const gotData = await PortfolioModel.find()
    revalidatePath("/")
    // console.log(gotData.map(async data => {
    //     const response = await fetch(data.readme_link)
    //     if (!response.ok) {
    //         return NextResponse.json({ error: response.statusText })
    //     }
    //     const result = await response.text()
    //     await PortfolioModel.updateOne({ _id: data._id }, {
    //         $set: {
    //             readme_texts: result
    //         }
    //     })
    // }))
    return NextResponse.json({ gotData: gotData })
}