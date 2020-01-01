module.exports = {
  help: {
    title: '도움말',
    description: '현재 Airi Sato Beta는 준비 중입니다.'
  },
  'switch-language': {
    notAvailable: '%s은(는) 현재 사용 가능하거나 유효한 언어가 아닙니다. 아래 목록에서 하나를 선택해주세요.\n> %s' // NOTE: newLanguage, languageList
  },
  uptime: {
    fromNow: '현재 세션은 %s에 시작되었습니다.' // NOTE: moment(locale).fromNow()
  },
  flow: {
    title: 'Flow 그룹',
    description: 'Flow 그룹은 Discord 서버를 위한 오토메이션 기능으로 사용자가 직접 오토메이션을 구성할 수 있도록 합니다.',
    noFlowGroups: '이 서버에 추가된 Flow 그룹이 없습니다.'
  },
  'flow-add-group': {
    groupNameRequired: '생성하려는 Flow 그룹의 이름을 지정해야 합니다.',
    groupNameExists: '%s은 이미 이 서버의 Flow 그룹에서 사용 중인 이름입니다.', // NOTE: flowGroupName
    creatingGroup: '새 Flow 그룹 생성 중...',
    createdGroup: '새 Flow 그룹(%s)을 생성했습니다.', // NOTE: flowGroupName
    creationFailed: '알 수 없는 오류가 발생하여 새 Flow 그룹을 생성할 수 없습니다.',
    groupNameMaxLengthExceed: '이름의 최대 길이를 초과하여 새 Flow 그룹을 생성할 수 없습니다. Flow 그룹 이름의 길이는 최대 32자입니다.',
    groupDescriptionMaxLengthExceed: '설명의 최대 길이를 초과하여 새 Flow 그룹을 생성할 수 없습니다. Flow 그룹 설명의 길이는 최대 256자입니다.'
  }
}
