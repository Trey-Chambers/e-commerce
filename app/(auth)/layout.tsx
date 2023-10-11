export default function AuthLayout ({
    children 
}: {
    children:React.ReactNode

}) {
    return (
        //use className to move sign in to center. Sign up will alsd be centered
        <div className="flex items-center justify-center h-full">
            {children}
        </div>
    )
}