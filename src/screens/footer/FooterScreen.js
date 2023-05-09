import React from 'react'

export const FooterScreen = () => {
    return (
        <>
            <div className='bg-gray-200 shadow-lg'>
                <div className='container justify-between flex flex-row'>
                    <div>otros links</div>
                    <div className='flex flex-reverse p-4 w-96 '>
                        <div className='bg-white justify-end rounded-md shadow-lg p-2 m-2 w-96'>
                            <form>
                                <div className="w-full h-auto flex flex-col">
                                    <label className="font-bold p-2 text-md">Correo</label>
                                    <input
                                        type="email"
                                        name="to"
                                        className="w-84 p-2 m-2 border-gray-500 border-2 border-collapse rounded-md"
                                    />
                                </div>
                                <div className="w-84 h-auto flex flex-col">
                                    <label className="font-bold p-2 text-md">Asunto</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        className="w-84 p-2 m-2 border-gray-500 border-2 border-collapse rounded-md"
                                    />
                                </div>
                                <div className="w-84 h-auto flex flex-col">
                                    <label className="font-bold p-2 text-md">Mensaje</label>
                                    <textarea
                                        name="body"
                                        className="w-84 p-2 m-2 border-collapse border-gray-500 border-2 rounded-md"
                                    ></textarea>
                                </div>
                                <button className="bg-black rounded-lg p-3 w-full text-center font-bold hover:transition-colors text-white hover:bg-slate-500 mt-2">
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
