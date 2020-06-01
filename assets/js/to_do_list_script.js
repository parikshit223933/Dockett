/* link handler function */
function change_link(ids)
{
    if(ids.length==0)
    {
        window.alert('Please select atleast one task to delete!');
    }
    s="/delete-tasks/?"
    let count=0;
    for(let id of ids)
    {
        s+="id"+count+"="
        s+=id;
        if(count<ids.length-1)
        {
            s+="&";
        }
        count++;
    }
    document.querySelector('#task-action>a').setAttribute('href', s);
}
document.querySelector('#task-action>a').addEventListener('click', function()
{
    
    let ids=new Array();
    for(let checkbox of document.querySelectorAll('input[type="checkbox"]'))
    {
        if(checkbox.checked)
        {
            ids.push(checkbox.getAttribute('id'));
        }
    }
    change_link(ids);
})


/* date handler function */

for (let date of document.querySelectorAll('.text-muted'))
{
    date.innerText=date.innerText.toString().substring(0, 15);
}

/* logo handler */
for (let logo of document.querySelectorAll('.logo'))
{
    if(logo.innerText=='Choose a Category')
    {
        logo.style.display="none"
    }
}


/* add button manager */

document.querySelector('button[type="submit"]').addEventListener('click', function()
{
    if(document.querySelector('textarea').value==""||document.querySelector('#two-dropdowns select').value=="Choose a Category"||document.querySelector('#two-dropdowns input').value=="")
    {
        window.alert('Remember to fill all the fields from next time.\nAn empty task will be added for you!');
    }
})