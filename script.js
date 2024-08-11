        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const taskList = document.getElementById('taskList');

            if (taskInput.value.trim() !== "") {
                // 새 할 일 항목 생성
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';

                // 할 일 텍스트 추가
                const taskText = document.createElement('span');
                taskText.textContent = taskInput.value;

                // 삭제 버튼 추가
                const deleteButton = document.createElement('button');
                deleteButton.className = 'delete-btn';
                deleteButton.textContent = '삭제';
                deleteButton.onclick = function() {
                    taskList.removeChild(listItem);
                };

                // 리스트 항목에 텍스트와 버튼 추가
                listItem.appendChild(taskText);
                listItem.appendChild(deleteButton);

                // 할 일 리스트에 새 항목 추가
                taskList.appendChild(listItem);

                // 입력 필드 초기화
                taskInput.value = "";
            }
        }
