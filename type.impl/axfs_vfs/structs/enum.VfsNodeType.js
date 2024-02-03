(function() {var type_impls = {
"arceos_api":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-VfsNodeType\" class=\"impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#147\">source</a><a href=\"#impl-VfsNodeType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_file\" class=\"method\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#149\">source</a><h4 class=\"code-header\">pub const fn <a href=\"axfs_vfs/structs/enum.VfsNodeType.html#tymethod.is_file\" class=\"fn\">is_file</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Tests whether this node type represents a regular file.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_dir\" class=\"method\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#154\">source</a><h4 class=\"code-header\">pub const fn <a href=\"axfs_vfs/structs/enum.VfsNodeType.html#tymethod.is_dir\" class=\"fn\">is_dir</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Tests whether this node type represents a directory.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_symlink\" class=\"method\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#159\">source</a><h4 class=\"code-header\">pub const fn <a href=\"axfs_vfs/structs/enum.VfsNodeType.html#tymethod.is_symlink\" class=\"fn\">is_symlink</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Tests whether this node type represents a symbolic link.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_block_device\" class=\"method\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#164\">source</a><h4 class=\"code-header\">pub const fn <a href=\"axfs_vfs/structs/enum.VfsNodeType.html#tymethod.is_block_device\" class=\"fn\">is_block_device</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if this node type is a block device.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_char_device\" class=\"method\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#169\">source</a><h4 class=\"code-header\">pub const fn <a href=\"axfs_vfs/structs/enum.VfsNodeType.html#tymethod.is_char_device\" class=\"fn\">is_char_device</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if this node type is a char device.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_fifo\" class=\"method\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#174\">source</a><h4 class=\"code-header\">pub const fn <a href=\"axfs_vfs/structs/enum.VfsNodeType.html#tymethod.is_fifo\" class=\"fn\">is_fifo</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if this node type is a fifo.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_socket\" class=\"method\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#179\">source</a><h4 class=\"code-header\">pub const fn <a href=\"axfs_vfs/structs/enum.VfsNodeType.html#tymethod.is_socket\" class=\"fn\">is_socket</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if this node type is a socket.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_char\" class=\"method\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#186\">source</a><h4 class=\"code-header\">pub const fn <a href=\"axfs_vfs/structs/enum.VfsNodeType.html#tymethod.as_char\" class=\"fn\">as_char</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\">char</a></h4></section></summary><div class=\"docblock\"><p>Returns a character representation of the node type.</p>\n<p>For example, <code>d</code> for directory, <code>-</code> for regular file, etc.</p>\n</div></details></div></details>",0,"arceos_api::fs::AxFileType"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-VfsNodeType\" class=\"impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#impl-Clone-for-VfsNodeType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","arceos_api::fs::AxFileType"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-VfsNodeType\" class=\"impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#impl-Debug-for-VfsNodeType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","arceos_api::fs::AxFileType"],["<section id=\"impl-Eq-for-VfsNodeType\" class=\"impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#impl-Eq-for-VfsNodeType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a></h3></section>","Eq","arceos_api::fs::AxFileType"],["<section id=\"impl-Copy-for-VfsNodeType\" class=\"impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#impl-Copy-for-VfsNodeType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a></h3></section>","Copy","arceos_api::fs::AxFileType"],["<section id=\"impl-StructuralPartialEq-for-VfsNodeType\" class=\"impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#impl-StructuralPartialEq-for-VfsNodeType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a></h3></section>","StructuralPartialEq","arceos_api::fs::AxFileType"],["<section id=\"impl-StructuralEq-for-VfsNodeType\" class=\"impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#impl-StructuralEq-for-VfsNodeType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a></h3></section>","StructuralEq","arceos_api::fs::AxFileType"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-VfsNodeType\" class=\"impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#impl-PartialEq-for-VfsNodeType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","arceos_api::fs::AxFileType"]],
"axfs":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-VfsNodeType\" class=\"impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#147\">source</a><a href=\"#impl-VfsNodeType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_file\" class=\"method\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#149\">source</a><h4 class=\"code-header\">pub const fn <a href=\"axfs_vfs/structs/enum.VfsNodeType.html#tymethod.is_file\" class=\"fn\">is_file</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Tests whether this node type represents a regular file.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_dir\" class=\"method\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#154\">source</a><h4 class=\"code-header\">pub const fn <a href=\"axfs_vfs/structs/enum.VfsNodeType.html#tymethod.is_dir\" class=\"fn\">is_dir</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Tests whether this node type represents a directory.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_symlink\" class=\"method\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#159\">source</a><h4 class=\"code-header\">pub const fn <a href=\"axfs_vfs/structs/enum.VfsNodeType.html#tymethod.is_symlink\" class=\"fn\">is_symlink</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Tests whether this node type represents a symbolic link.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_block_device\" class=\"method\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#164\">source</a><h4 class=\"code-header\">pub const fn <a href=\"axfs_vfs/structs/enum.VfsNodeType.html#tymethod.is_block_device\" class=\"fn\">is_block_device</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if this node type is a block device.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_char_device\" class=\"method\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#169\">source</a><h4 class=\"code-header\">pub const fn <a href=\"axfs_vfs/structs/enum.VfsNodeType.html#tymethod.is_char_device\" class=\"fn\">is_char_device</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if this node type is a char device.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_fifo\" class=\"method\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#174\">source</a><h4 class=\"code-header\">pub const fn <a href=\"axfs_vfs/structs/enum.VfsNodeType.html#tymethod.is_fifo\" class=\"fn\">is_fifo</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if this node type is a fifo.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_socket\" class=\"method\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#179\">source</a><h4 class=\"code-header\">pub const fn <a href=\"axfs_vfs/structs/enum.VfsNodeType.html#tymethod.is_socket\" class=\"fn\">is_socket</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if this node type is a socket.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_char\" class=\"method\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#186\">source</a><h4 class=\"code-header\">pub const fn <a href=\"axfs_vfs/structs/enum.VfsNodeType.html#tymethod.as_char\" class=\"fn\">as_char</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.char.html\">char</a></h4></section></summary><div class=\"docblock\"><p>Returns a character representation of the node type.</p>\n<p>For example, <code>d</code> for directory, <code>-</code> for regular file, etc.</p>\n</div></details></div></details>",0,"axfs::fops::FileType"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-VfsNodeType\" class=\"impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#impl-Clone-for-VfsNodeType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","axfs::fops::FileType"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-VfsNodeType\" class=\"impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#impl-Debug-for-VfsNodeType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","axfs::fops::FileType"],["<section id=\"impl-Eq-for-VfsNodeType\" class=\"impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#impl-Eq-for-VfsNodeType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a></h3></section>","Eq","axfs::fops::FileType"],["<section id=\"impl-Copy-for-VfsNodeType\" class=\"impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#impl-Copy-for-VfsNodeType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a></h3></section>","Copy","axfs::fops::FileType"],["<section id=\"impl-StructuralPartialEq-for-VfsNodeType\" class=\"impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#impl-StructuralPartialEq-for-VfsNodeType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a></h3></section>","StructuralPartialEq","axfs::fops::FileType"],["<section id=\"impl-StructuralEq-for-VfsNodeType\" class=\"impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#impl-StructuralEq-for-VfsNodeType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a></h3></section>","StructuralEq","axfs::fops::FileType"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-VfsNodeType\" class=\"impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#impl-PartialEq-for-VfsNodeType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/axfs_vfs/structs.rs.html#50\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"axfs_vfs/structs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::structs::VfsNodeType\">VfsNodeType</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","axfs::fops::FileType"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()