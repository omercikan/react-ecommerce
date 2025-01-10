import { Bounce, toast } from 'react-toastify'

const toastify = (message: string) => {
    const toastify = toast.success(message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    })

    return { toastify };
}

export default toastify;