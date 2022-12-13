export default function LastWinner() {
    return (
        <>
            <article class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
                <div class="flex items-center gap-4">
                    <span class="hidden rounded-full bg-gray-100 p-2 text-gray-600 sm:block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                    </span>

                    <div>
                        <p class="text-sm text-gray-500">Profit</p>

                        <p class="text-2xl font-medium text-gray-900">$240.94</p>
                    </div>
                </div>

                <div class="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                    </svg>

                    <span class="text-xs font-medium"> 67.81% </span>
                </div>
            </article>

            <article class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
                <div class="flex items-center gap-4">
                    <span class="hidden rounded-full bg-gray-100 p-2 text-gray-600 sm:block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                    </span>

                    <div>
                        <p class="text-sm text-gray-500">Profit</p>

                        <p class="text-2xl font-medium text-gray-900">$240.94</p>
                    </div>
                </div>

                <div class="inline-flex gap-2 rounded bg-red-100 p-1 text-red-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                        />
                    </svg>

                    <span class="text-xs font-medium"> 67.81% </span>
                </div>
            </article>
        </>
    )
}
