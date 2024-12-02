if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/home/purush/.gradle/caches/8.10.2/transforms/c3b651e7fea0fc01769d2ba6991ee661/transformed/jetified-hermes-android-0.76.1-debug/prefab/modules/libhermes/libs/android.x86_64/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/purush/.gradle/caches/8.10.2/transforms/c3b651e7fea0fc01769d2ba6991ee661/transformed/jetified-hermes-android-0.76.1-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

