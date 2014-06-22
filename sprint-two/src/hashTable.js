var HashTable = function() {

    this._limit = 8;
    this._storage = makeLimitedArray(this._limit);
    this._itemCount = 0;
};

HashTable.prototype.resize = function() {
    var tempStorage = this._storage;
    if (this._limit === 8) {
        console.log('hi')
        this._limit *= 2;
        this._storage = makeLimitedArray(this._limit);
        _(this._storage).extend(tempStorage);
    } else {
        this._limit = this._limit / 2;
        this._storage = makeLimitedArray(this._limit);
        _(this._storage).extend(tempStorage);

    }
}

HashTable.prototype.insert = function(k, v) {
    var i = getIndexBelowMaxForKey(k, this._limit);
    this._itemCount++;

    //make the shell if not yet made
    if (this._storage.get(i) === undefined) {
        this._storage.set(i, []);
    }
    //grab the shell
    var shell = this._storage.get(i);

    //overwrite if exists
    var exists = false;
    for (var j = 0; j < shell.length; j++) {
        if (shell[j][0] === k) {
            shell[j][1] = v;
            exists = true;
        }
    }
    //if it doesn't exist, push it
    if (!exists) {
        shell.push([k, v]);
    }
    //send back the modified shell
    this._storage.set(i, shell);


    if (this._itemCount > 6 && this._limit === 8) {
        this.resize()
    }



};

HashTable.prototype.retrieve = function(k) {
    var i = getIndexBelowMaxForKey(k, this._limit);
    var shell = this._storage.get(i);

    for (var j = 0; j < shell.length; j++) {
        if (shell[j][0] === k) {
            return shell[j][1];
        }
    }

    return null;


};

HashTable.prototype.remove = function(k) {
    var memo = this._storage.set;
    this._storage.each(function(shell, slot, collection) {
        if (shell !== undefined) {
            var newShell = [];
            for (var i = 0; i < shell.length; i++) {
                if (shell[i][0] !== k) {
                    newShell.push(shell[i]);
                }
            }
            memo(slot, newShell);
        }
    });
    this._itemCount--;
    if (this._itemCount < 6 && this._limit === 16) {
        this.resize();
    }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */