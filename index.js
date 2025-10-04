 function addTask() {
      let input = document.getElementById("taskInput");
      let taskText = input.value.trim();
      if (taskText === "") return;

      let li = document.createElement("li");
      li.className = "flex justify-between items-center bg-gray-200 px-3 py-2 rounded-lg";

      li.innerHTML = `
        <span class="flex-1">${taskText}</span>
        <button onclick="removeTask(this)" class="text-red-500 font-bold hover:text-red-700">&times;</button>
      `;

      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }

    function removeTask(element) {
      element.parentElement.remove();
    }
