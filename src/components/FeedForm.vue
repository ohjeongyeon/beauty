<template>
  <v-container fluid style="margin-top: 50px; margin-bottom: 50px;">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="form-card">
          <v-card-title>
            <span class="headline">Create a New Feed</span>
          </v-card-title>

          <v-card-text>
            <v-form ref="form" v-model="valid">
              <!-- 제목 입력 필드 -->
              <v-text-field
                label="Title"
                v-model="title"
                :rules="[rules.required]"
                required
              ></v-text-field>

              <!-- 이미지 업로드 필드 -->
              <v-file-input
                label="Upload Image"
                v-model="image"
                :rules="[rules.required]"
                show-size
                truncate-length="15"
                required
              ></v-file-input>

              <!-- 내용 입력 필드 -->
              <v-textarea
                label="Content"
                v-model="content"
                :rules="[rules.required]"
                required
              ></v-textarea>

              <!-- 제품 등록 필드 -->
              <v-text-field
                label="Product"
                v-model="product"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="submitForm" :disabled="!valid">
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FeedForm",
  data() {
    return {
      title: "",
      image: null,
      content: "",
      product: "",
      valid: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        // 새 피드를 제출하는 로직을 여기에 추가
        console.log("Form submitted with:", {
          title: this.title,
          image: this.image,
          content: this.content,
          product: this.product,
        });
        // 제출 후에는 목록 페이지로 리디렉션
        this.$router.push({ name: "FeedList" });
      }
    },
  },
};
</script>

<style scoped>
.form-card {
  margin:auto;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  width:70%
}

.headline {
  font-weight: bold;
  font-size: 24px;
}

.v-text-field,
.v-file-input,
.v-textarea {
  margin-bottom: 20px;
}
</style>
