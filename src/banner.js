

function Banner(){
    return(
        <div class="justify-center w-full h-screen flex">
            <div class="w-[70%] 3xl:w-[65%] Banner mt-[3%] 3xl:mt-[5%] gap-2 static">
                <text class="TextBanner ml-[5%]">
                    Olá,<text class="pink-base ">Usuário!</text></text>
                <text class="ml-[5%] SecundaryText">Pronto para começar seu dia?</text>
                <div class="absolute mt-[4%] ml-[40%] xl:mt-[4%] xl:ml-40% 3xl:mt-[3%] 3xl:ml-[40%] lg:mt-[6%]">
                    <img src="./imgs/ImgBanner.svg" />
                </div>
            </div>

        </div>
    );
}

export default Banner;