class GenericRepository
{
    constructor(context)
    {
        this.context = context;
    }

    Add(item)
    {
        async()=>
        {
            //обращение в бд к нужной таблице исходя из типа item
            //так как это дженерик репозиторий
            //this.context;
        }
    }

    Delete(){}

    Get(){}
}
