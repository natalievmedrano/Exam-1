
$(function() {
 
    //Write your code below
    async function planets(){
            
    const response = await fetch('planets.json');
    const dataList = await response.json();
    const container = document.getElementById('list-container');
    
    container.innerHTML = dataList.map(item=> 

        <div class="list-item">
            <div></div>

        </div>


    )

    }
});
