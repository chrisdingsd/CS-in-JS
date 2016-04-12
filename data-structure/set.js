//ES5 version

function Set(){
    this.value = [];
    this.numberOfSets = 0;
}

Set.prototype.add = function(value) {
    if(this.value.indexOf(value) === -1){
        this.value.push(value);
        this.numberOfSets ++;
    }
};

Set.prototype.remove = function(value) {
    var index = this.value.indexOf(value);
    if(~index) {
        this.value.splice(index, 1);
        this.numberOfSets --;
    }
};

Set.prototype.contains = function(value) {
    return this.value.indexOf(value) !== -1;
};

Set.prototype.union = function(set) {
    var newSet = new Set();
    set.value.forEach(function(value){
        newSet.add(value);
    })
    this.value.forEach(function(value){
        newSet.add(value);
    })
    return newSet;
};

Set.prototype.interset = function(set){
    var newSet = new Set();
    set.value.forEach(function(value){
        if(this.contains(value)){
            newSet.add(value);
        }
    });
    return newSet;
};

Set.prototype.difference = function(set){
  var newSet = new Set();
    set.value.forEach(function(value){
        if(!this.contains(value)){
            newSet.add(value);
        }
    });
    return newSet;
};

Set.prototype.isSubset = function(set){
    return set.value.every(function(value){
        return this.contains(value);
    }, this);
};