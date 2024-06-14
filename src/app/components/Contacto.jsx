/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iBY57k54K9r
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="bg-[#ffffff] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Contáctanos</h2>
        <form>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9186b8] focus:border-[#9186b8]"
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9186b8] focus:border-[#9186b8]"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="comments" className="block text-gray-700 font-medium mb-2">
              Comentarios
            </label>
            <textarea
              id="comments"
              name="comments"
              rows={4}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9186b8] focus:border-[#9186b8]"
              placeholder="Escribe tus comentarios"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#9186b8] text-white px-6 py-3 rounded-md hover:bg-[#7f6fb2] focus:outline-none focus:ring-2 focus:ring-[#9186b8] focus:ring-opacity-50"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}