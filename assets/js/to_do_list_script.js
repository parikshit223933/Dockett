function change_link(ids)
{
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