export const Section6 = () => {
    return (
        <div className="md:max-w-[70%] w-[90%]   mx-auto mt-24 flex flex-col items-center">
            <div className="w-full p-4 text-center bg-accent rounded-t-2xl md:text-lg text-sm">
                <span className="text-white ">
                    In case of emergency, call now{' '}
                    <a href="tel:+212528322993" className="text-primary underline font-bold">
                        +212 528 322 993
                    </a>
                </span>
            </div>
            <img src="/production/img5.webp" alt="" className="w-full object-cover" />
        </div>
    );
}
