function to2dArray(obj)
{
  var array2d=[];
  for(let i=0;i<obj.length;i++)
  { let arr=[];
    for(let key in obj[i])
    {
      
      //console.log(obj[i][key])
      arr.push(obj[i][key]);
    }
    //console.log(arr);
    array2d.push(arr);
  }

  return array2d;
}

function getRandomWeight(n, a, b) { 
    var weight = [];
        for (let i = 0; i < n; i++) {
            var random = Math.random() * (b - a) + a;
            weight.push(random);
        }
    return weight
    }   


    
    function vect_mat_mul(vect,matrix)
{
  var output=zeros(vect.length);
  for(let i=0;i<vect.length;i++)
  {
    output[i]=w_sum(vect,matrix[i]);
  }

  return output;
  
}

function w_sum(a,b)
{
  if(a.length===b.length)
  {
    var output=0;
    for(let i=0;i<a.length;i++)
    {
      output+=(a[i]*b[i]);
    }
    return output;
  }
}

function neural_network(input,weight)
{
  var pred=vect_mat_mul(input,weights);
  return pred;
}