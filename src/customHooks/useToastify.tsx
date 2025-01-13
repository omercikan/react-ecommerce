import { Bounce, toast } from 'react-toastify'

const useToastify = (message: string) => {
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
        className: 'custom-toast-size'
    })

    return { toastify };
}

export default useToastify;