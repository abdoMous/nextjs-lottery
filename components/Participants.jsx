export default function Participants() {
    return (
        <>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                Address
                            </th>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                Date entered
                            </th>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                Amount in ETH
                            </th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200">
                        <tr>
                            <td class="whitespace-nowrap px-4 py-2">
                                0xcCb4DD8873b48aC533dA83371Dd9ED4fa064C12b
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">3 minutes ago</td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">0.1 ETH</td>
                        </tr>
                        <tr>
                            <td class="whitespace-nowrap px-4 py-2">
                                0xcCb4DD8873b48aC533dA83371Dd9ED4fa064C12b
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                23 minutes ago
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">0.1 ETH</td>
                        </tr>
                        <tr>
                            <td class="whitespace-nowrap px-4 py-2">
                                0xcCb4DD8873b48aC533dA83371Dd9ED4fa064C12b
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                39 minutes ago
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">0.25 ETH</td>
                        </tr>
                        <tr>
                            <td class="whitespace-nowrap px-4 py-2">
                                0xcCb4DD8873b48aC533dA83371Dd9ED4fa064C12b
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">1 hour ago</td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">0.1 ETH</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
