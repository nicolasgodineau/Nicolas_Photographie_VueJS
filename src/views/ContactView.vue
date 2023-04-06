<template>
    <main class="h-screen lg:container lg:mx-auto p-4">
        <h1 class="text-5xl uppercase p-10 mt-[4rem]">Contact</h1>
        <section class="flex flex-row items-center justify-center">
            <div
                class="h-full flex flex-col items-center justify-between gap-8"
            >
                <div class="flex flex-row gap-8">
                    <img
                        class="h-96 shadow-lg object-cover transition-shadow duration-300 ease-in-out shadow-black/30"
                        src="@/assets/img/Profil.webp"
                        alt="photo de nicolas godineau"
                    />
                    <div class="w-[40ch] flex flex-col gap-4 text-left">
                        <p>Né à Bordeaux en France,</p>
                        <p>
                            j’ai passé mon enfance bercé par le bruit des
                            déclenchements d’appareil photo de mon père.
                        </p>
                        <p>
                            C’est à l’âge de 20 ans et avec mon premier appareil
                            photo que je me suis découvert une passion pour la
                            photographie.
                            <br />
                            Aujourd’hui, je partage mes photographies avec vous,
                            fragments d’émotions et reflet de ce que je suis, de
                            ce que j’aime.
                        </p>
                        <p>
                            N’hésitez pas à me contacter pour discuter ensemble
                            d’une potentielle collaboration !
                        </p>
                    </div>
                </div>

                <div class="w-full md:w-96 md:max-w-full mx-auto">
                    <div class="p-6">
                        <form
                            action="https://public.herotofu.com/v1/0b4393f0-d02c-11ed-9434-5b53665d9a66"
                            method="post"
                            accept-charset="UTF-8"
                            class="flex flex-col"
                        >
                            <div class="flex flex-row gap-8">
                                <label class="block mb-6">
                                    <span class="text-gray-700">Your name</span>
                                    <input
                                        type="text"
                                        name="name"
                                        class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        required
                                    />
                                </label>
                                <label class="block mb-6">
                                    <span class="text-gray-700"
                                        >Email address</span
                                    >
                                    <input
                                        name="email"
                                        type="email"
                                        class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        required
                                    />
                                </label>
                            </div>
                            <label class="block mb-6">
                                <span class="text-gray-700">Message</span>
                                <textarea
                                    name="message"
                                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    rows="3"
                                    required
                                ></textarea>
                            </label>
                            <div class="mb-6">
                                <button
                                    type="submit"
                                    class="bg-black shadow w-32 block border-black border-2 px-4 py-2 text-whiteTheme hover:bg-whiteTheme hover:text-black transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
