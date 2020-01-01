module.exports = {
  names: {
    user: {
      language: '언어',
      updateNotifying: '업데이트 구독',
      errorTracing: '오류 추적'
    },
    guild: {
      prefix: '서버에서 사용할 접두사입니다.',
      errorTracing: '특정 오류가 발생했을때 메세지 끝에 덧붙여 알려주도록 합니다.',
      userVerification: '새로운 사용자가 초대되었을때 검증하도록 합니다.'
    }
  },
  descriptions: {
    user: {
      language: '사용할 클라이언트 언어를 설정합니다.',
      updateNotifying: '클라이언트의 업데이트 및 새소식을 DM으로 구독합니다.',
      errorTracing: '특정 오류가 발생했을때 DM 등으로 알려주도록 합니다.'
    },
    guild: {
      prefix: '서버에서 사용할 접두사입니다.',
      errorTracing: '특정 오류가 발생했을때 메세지 끝에 덧붙여 알려주도록 합니다.',
      userVerification: '새로운 사용자가 초대되었을때 검증하도록 합니다.'
    }
  },

  switching: '클라이언트 설정을 업데이트하는 중...',
  switchFailed: '클라이언트 설정 업데이트에 실패했습니다.', // NOTE: errorMessage
  switchedTo: '클라이언트 설정이 업데이트되었습니다.\n> %s: %s', // NOTE: preferencesName, value

  enabled: '활성화 됨',
  disabled: '비활성화 됨',
  notAvailable: '사용할 수 없음'
}
