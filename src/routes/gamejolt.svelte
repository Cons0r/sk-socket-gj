<script lang=ts>
    async function submit(e) {
        const data = new FormData(e.target as HTMLFormElement)
        GJAPI.UserLoginManual(data.get("username"), data.get("code"), u => {
            if(u.success === 'true') {
                document.location = `/api/gamejolt/${data.get("username")}/${data.get("code")}`
            }
        })
    }
</script>

<div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    
    <div class="max-h-fit rounded-3xl flex flex-col justify-center backdrop-brightness-50 py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <img class="mx-auto h-12 w-auto" src="https://s.gjcdn.net/assets/0565ffdb.png" alt="GameJolt">
        </div>
      
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-[#121212] py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form class="space-y-6" on:submit|preventDefault={submit} method="POST">
                <div>
                    <label for="username" class="block text-sm font-medium text-white"> GameJolt Username </label>
                    <div class="mt-1">
                        <input id="username" name="username" autocomplete="username" required class="appearance-none block w-full px-3 py-2 border bg-gray-800 rounded-md shadow-sm focus:outline-none sm:text-sm">
                    </div>
                </div>

                <div>
                    <label for="code" class="block text-sm font-medium text-white"> GameJolt Token </label>
                    <div class="mt-1">
                        <input id="code" name="code" type="password" required class="appearance-none block w-full px-3 py-2 border bg-gray-800 rounded-md shadow-sm focus:outline-none sm:text-sm">
                    </div>
                </div>
      
              <div class="flex items-center justify-between">
                <div class="text-sm">
                  <a href="https://gamejolt.com/help/tokens" class="font-medium text-[#ccff00] hover:text-[#2f7f6f]"> Whats a GJ Token? </a>
                </div>
              </div>
      
              <div>
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-600 hover:text-white bg-[#ccff00] hover:bg-[#2f7f6f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Log in</button>
              </div>
            </form>
          </div>
        </div>
    </div>

  </div>
  